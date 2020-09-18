<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WeightRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *    normalizationContext={"groups"={"weight"}})
 * )
 * @ApiFilter(SearchFilter::class, properties={"user": "exact"})
 * @ORM\Entity(repositoryClass=WeightRepository::class)
 */
class Weight
{
  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="integer")
   * @Groups({"weight", "write"})
   */
  private $value;

  /**
   * @ORM\Column(type="datetime")
   * @Groups({"weight", "write"})
   */
  private $date;

  /**
   * @ORM\Column(type="text", nullable=true)
   * @Groups({"weight", "write"})
   */
  private $feeling;

  /**
   * @ORM\ManyToOne(targetEntity=User::class)
   * @ORM\JoinColumn(nullable=false)
   * @Groups({"weight", "write"})
   */
  private $user;

  public function getId(): ?int
  {
    return $this->id;
  }


  public function getValue(): ?int
  {
    return $this->value;
  }

  public function setValue(int $value): self
  {
    $this->value = $value;

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

  public function getFeeling(): ?string
  {
    return $this->feeling;
  }

  public function setFeeling(?string $feeling): self
  {
    $this->feeling = $feeling;

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
