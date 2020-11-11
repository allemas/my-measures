<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\User;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

final class UserDataPersister implements ContextAwareDataPersisterInterface
{

  private $userPasswordEncoder;
  private $entityManager;

  public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $userPasswordEncoder)
  {
    $this->userPasswordEncoder = $userPasswordEncoder;
    $this->entityManager = $entityManager;
  }

  public function supports($data, array $context = []): bool
  {
    return $data instanceof User;
  }

  /**
   * @param User $data
   * @param array $context
   * @return object|void
   */
  public function persist($data, array $context = [])
  {
    $data->setPassword($this->userPasswordEncoder->encodePassword($data, $data->getPlainPassword()));
    $this->entityManager->persist($data);
    $this->entityManager->flush();

    return $data;
  }

  public function remove($data, array $context = [])
  {
    // call your persistence layer to delete $data
  }
}
