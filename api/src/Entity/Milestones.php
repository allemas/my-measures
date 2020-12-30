<?php


namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;


/**
 * @ApiResource()
 */
class Milestones
{
  /**
   * @ApiProperty(identifier=true)
   */
  public $id;

  public $label;

  public $type;


}
