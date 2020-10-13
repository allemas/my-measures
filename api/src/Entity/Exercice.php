<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ExerciceRepository;
use Doctrine\ORM\Mapping as ORM;

use Ramsey\Uuid\Doctrine\UuidGenerator;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ExerciceRepository::class)
 */
class Exercice
{
  /**
   * @ORM\Id()
   * @ORM\Column(type="uuid", unique=true)
   * @ORM\GeneratedValue(strategy="CUSTOM")
   * @ORM\CustomIdGenerator(class=UuidGenerator::class)
   */
  private $uuid;

  /**
   * @ORM\Column(type="string", length=70)
   */
  private $name;

  /**
   * @ORM\Column(type="text", nullable=true)
   */
  private $description;


  public function getName(): ?string
  {
    return $this->name;
  }

  public function setName(string $name): self
  {
    $this->name = $name;

    return $this;
  }

  public function getUuid()
  {
    return $this->uuid;
  }

  public function setUuid($uuid): self
  {
    $this->uuid = $uuid;

    return $this;
  }

  public function getDescription(): ?string
  {
    return $this->description;
  }

  public function setDescription(?string $description): self
  {
    $this->description = $description;

    return $this;
  }
}

/**
 *
 * https://github.com/davejt/exercise
 *
 */
