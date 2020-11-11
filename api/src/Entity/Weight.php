<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\WeightRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
/**
 * @ApiResource(
 *     collectionOperations={"get","post",
 *      "get_shortlist": {
 *        "method": "GET",
 *        "path": "/weights/short",
 *        "input_formats": "json",
 *        "pagination_items_per_page"=5,
 *        }
 *      },
 *     itemOperations={"get", "delete", "put"}
 * )
 * @ApiFilter(SearchFilter::class, properties={"user": "exact"})
 * @ApiFilter(OrderFilter::class, properties={"date"="desc"})
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
   */
  private $value;

  /**
   * @ORM\Column(type="datetime")
   */
  private $date;

  /**
   * @ORM\Column(type="text", nullable=true)
   */
  private $feeling;

  /**
   * @ORM\ManyToOne(targetEntity=User::class)
   * @ORM\JoinColumn(nullable=false)
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
