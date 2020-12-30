<?php


namespace App\DataProvider;


use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use App\Entity\Milestones;
use App\Repository\TrainingRepository;
use App\Repository\UserRepository;
use Ramsey\Uuid;

final class MilestonesCollectionDataProvider implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface
{

  private $trainingRepository;
  private $userRepository;


  public function __construct(TrainingRepository $repository, UserRepository $repositoryUser)
  {
    $this->userRepository = $repositoryUser;
    $this->trainingRepository = $repository;
  }

  public function getCollection(string $resourceClass, string $operationName = null, array $context = [])
  {
    $filter = $context["filters"];
    if (!Uuid\Uuid::isValid($filter["user"])) {
      throw  new Uuid\Exception\InvalidUuidStringException("Invalid User Uuid");
    }
    error_log('*******************START***********************');

    $milestones = array();
    $user = $this->userRepository->findById($filter["user"]);
    $trainings = $this->trainingRepository->findBy(["user" => $user]);

    if (count($trainings) > 1) {
      $m = new Milestones();
      $m->id = 1;
      $m->type = 'RECURENCY_START';
      $m->label = "Voter premier entrainement";
      $milestones['RECURENCY_START'] = $m;
    }

    if (count($trainings) > 2) {
      $m = new Milestones();
      $m->id = 2;
      $m->type = 'RECURENCY_2';
      $m->label = "Debut de recurence";
      $milestones['RECURENCY_2'] = $m;
    }
    error_log(count($trainings));

    foreach ($trainings as $training) {
      $trainingVolume = $training->getBodyPart();
      foreach ($trainingVolume as $volume) {
        $volumeCalculated = intval($volume["weight"]) * intval($volume["reps"]);

        if (intval($volumeCalculated) > 1000 && !array_key_exists('TRAINING_TONE', $milestones)) {
          $m = new Milestones();
          $m->id = 3;
          $m->type = 'TRAINING_OVERLOAD';
          $m->label = "Tone au volume ";
          $milestones['TRAINING_TONE'] = $m;
        }


      }
    }

    return array_values($milestones);
  }

  public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
  {
    return Milestones::class === $resourceClass;
  }
}
