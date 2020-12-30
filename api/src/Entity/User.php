<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Ramsey\Uuid\Doctrine\UuidGenerator;

/**
 * @ApiResource()
 *
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
  /**
   * @ORM\Id()
   * @ORM\Column(type="uuid", unique=true)
   * @ORM\GeneratedValue(strategy="CUSTOM")
   * @ORM\CustomIdGenerator(class=UuidGenerator::class)
   * @Groups({"user:read"})
   */
  private $id;

  /**
   * @Groups("weight")
   * @ORM\Column(type="string", length=180, unique=true)
   */
  private $email;


  /**
   * @ORM\Column(type="json")
   * @Groups("weight")
   */
  private $roles = [];

  /**
   * @var string The hashed password
   * @ORM\Column(type="string")
   *
   * @Groups({"user:write"})
   *
   */
  private $password;

  /**
   * @Groups({ "user:write"})
   */
  public $plainPassword;


  public function getId()
  {
    return $this->id;
  }

  public function getEmail(): ?string
  {
    return $this->email;
  }

  public function setEmail(string $email): self
  {
    $this->email = $email;

    return $this;
  }

  /**
   * A visual identifier that represents this user.
   *
   * @see UserInterface
   */
  public function getUsername(): string
  {
    return (string)$this->email;
  }

  /**
   * @see UserInterface
   */
  public function getRoles(): array
  {
    $roles = $this->roles;
    // guarantee every user at least has ROLE_USER
    $roles[] = 'ROLE_USER';

    return array_unique($roles);
  }

  public function setRoles(array $roles): self
  {
    $this->roles = $roles;

    return $this;
  }

  /**
   * @see UserInterface
   */
  public function getPassword(): string
  {
    return (string)$this->password;
  }

  public function setPassword(string $password): self
  {
    $this->password = $password;

    return $this;
  }

  /**
   * @see UserInterface
   */
  public function getSalt()
  {
    // not needed when using the "bcrypt" algorithm in security.yaml
  }
  /**
   * @see UserInterface
   */
  public function eraseCredentials()
  {
    // If you store any temporary, sensitive data on the user, clear it here
    // $this->plainPassword = null;
  }

  public function getPlainPassword(): ?string
  {
    return $this->plainPassword;
  }

  public function setPlainPassword(?string $plainPassword): self
  {
    $this->plainPassword = $plainPassword;

    return $this;
  }
}
