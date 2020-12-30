<?php


namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;

/**
 * @ApiResource()
 */
class Leaderboard
{

  /**
   * @ApiProperty(identifier=true)
   */
  public $id;


  public $board = array();
}
