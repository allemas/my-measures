<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TrainingRepository;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Doctrine\UuidGenerator;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

use App\Controller\TestController;

/**
 * @ApiResource()
 * @ApiFilter(SearchFilter::class, properties={"user": "exact"})
 * @ORM\Entity(repositoryClass=TrainingRepository::class)
 */
class Training
{

  /**
   * @ORM\Id()
   * @ORM\Column(type="uuid", unique=true)
   * @ORM\GeneratedValue(strategy="CUSTOM")
   * @ORM\CustomIdGenerator(class=UuidGenerator::class)
   */
  private $uuid;

  /**
   * @ORM\Column(type="datetime")
   */
  private $date;

  /**
   * @ORM\Column(type="string", length=25, nullable=true)
   */
  private $status;

  /**
   * @ORM\Column(type="array", nullable=true)
   */
  private $bodyPart = [];

  /**
   * @ORM\Column(type="smallint", nullable=true)
   */
  private $sets;

  /**
   * @ORM\ManyToOne(targetEntity=User::class)
   * @ORM\JoinColumn(nullable=false)
   */
  private $user;


  public function getUuid()
  {
    return $this->uuid;
  }

  public function setUuid($uuid): self
  {
    $this->uuid = $uuid;

    return $this;
  }

  public function getDate(): ?\DateTimeInterface
  {
    return $this->date;
  }

  public function setDate(\DateTimeInterface $date): self
  {
    $this->date = $date;

    return $this;
  }

  public function getStatus(): ?string
  {
    return $this->status;
  }

  public function setStatus(string $status): self
  {
    $this->status = $status;

    return $this;
  }

  public function getBodyPart(): ?array
  {
    return $this->bodyPart;
  }

  public function setBodyPart(?array $bodyPart): self
  {
    $this->bodyPart = $bodyPart;

    return $this;
  }

  public function getSets(): ?int
  {
    return $this->sets;
  }

  public function setSets(?int $sets): self
  {
    $this->sets = $sets;

    return $this;
  }

  public function getUser(): ?User
  {
    return $this->user;
  }

  public function setUser(?User $user): self
  {
    $this->user = $user;

    return $this;
  }
}
