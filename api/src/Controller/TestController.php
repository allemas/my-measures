<?php


namespace App\Controller;

use App\Entity\Training;
use App\Repository\TrainingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TestController extends AbstractController
{
  public function __construct()
  {
  }

  public function __invoke(): Response
  {
    return new Response(json_encode([]), 200);
  }

}
