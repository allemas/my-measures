<?php


namespace App\DataProvider;


use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Entity\Leaderboard;
use App\Repository\TrainingRepository;

final class LeaderboardCollectionDataProvider implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface
{

  private $repository;


  public function __construct(TrainingRepository $repository)
  {
    $this->repository = $repository;
  }

  public function getCollection(string $resourceClass, string $operationName = null, array $context = [])
  {
    $trainings = $this->repository->findAll();
    $leaderboard = new Leaderboard();
    $leaderboard->id = 1;

    foreach ($trainings as $training) {
      $userId = $training->getUser()->getId()->__toString();
      $trainingVolume = $training->getBodyPart();

      $volumeCalculated = 0;
      foreach ($trainingVolume as $volume) {
        $volumeCalculated = intval($volume["weight"]) * intval($volume["reps"]);
      }

      if (array_key_exists($userId, $leaderboard->board)) {
        $leaderboard->board[$userId]["score"] += $volumeCalculated;
      } else {
        $leaderboard->board[$userId] = ["user" => $training->getUser(), "score" => $volumeCalculated];
      }
    }

    return $leaderboard;
  }

  public
  function supports(string $resourceClass, string $operationName = null, array $context = []): bool
  {
    return Leaderboard::class === $resourceClass;
  }
}
