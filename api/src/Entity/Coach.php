<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CoachRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CoachRepository::class)
 */
class Coach
{
  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer")
   */
  private $id;

  /**
   * @ORM\OneToOne(targetEntity=User::class, cascade={"persist", "remove"})
   */
  private $user;


  /**
   * @ORM\ManyToMany(targetEntity=User::class)
   */
  private $members;

  public function __construct()
  {
    $this->members = new ArrayCollection();
  }

  public function getId(): ?int
  {
    return $this->id;
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

  /**
   * @return Collection|User[]
   */
  public function getMembers(): Collection
  {
    return $this->members;
  }

  public function addMember(User $member): self
  {
    if (!$this->members->contains($member)) {
      $this->members[] = $member;
    }

    return $this;
  }

  public function removeMember(User $member): self
  {
    if ($this->members->contains($member)) {
      $this->members->removeElement($member);
    }

    return $this;
  }
}
