<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BalanceSheetRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\GetShortBalanceSheet;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *   attributes={"order"={"date": "desc"}},
 *     collectionOperations={"get","post",
 *      "get_short": {
 *        "method": "GET",
 *        "path": "/balance_sheets/short",
 *        "input_formats": "json",
 *        "pagination_items_per_page"=1,
 *        },
 *     },
 *
 * )
 * @ApiFilter(OrderFilter::class, properties={"date"="desc"})
 * @ApiFilter(SearchFilter::class, properties={"user": "exact"})
 * @ORM\Entity(repositoryClass=BalanceSheetRepository::class)
 */
class BalanceSheet
{
  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $chest;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $shoulders;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $arms;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $back;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $waist;

  /**
   * @ORM\Column(type="integer", nullable=true)
   */
  private $thigh;

  /**
   * @ORM\Column(type="text", nullable=true)
   */
  private $feeling;

  /**
   * @ORM\ManyToOne(targetEntity=User::class)
   * @ORM\JoinColumn(nullable=false)
   */
  private $user;

  /**
   * @ORM\Column(type="datetime")
   */
  private $date;

  public function getId(): ?int
  {
    return $this->id;
  }

  public function getChest(): ?int
  {
    return $this->chest;
  }

  public function setChest(?int $chest): self
  {
    $this->chest = $chest;

    return $this;
  }

  public function getShoulders(): ?int
  {
    return $this->shoulders;
  }

  public function setShoulders(?int $shoulders): self
  {
    $this->shoulders = $shoulders;

    return $this;
  }

  public function getArms(): ?int
  {
    return $this->arms;
  }

  public function setArms(?int $arms): self
  {
    $this->arms = $arms;

    return $this;
  }

  public function getBack(): ?int
  {
    return $this->back;
  }

  public function setBack(?int $back): self
  {
    $this->back = $back;

    return $this;
  }

  public function getWaist(): ?int
  {
    return $this->waist;
  }

  public function setWaist(?int $waist): self
  {
    $this->waist = $waist;

    return $this;
  }

  public function getThigh(): ?int
  {
    return $this->thigh;
  }

  public function setThigh(?int $thigh): self
  {
    $this->thigh = $thigh;

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

  public function getDate(): ?\DateTimeInterface
  {
    return $this->date;
  }

  public function setDate(\DateTimeInterface $date): self
  {
    $this->date = $date;

    return $this;
  }
}
