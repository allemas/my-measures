<?php


namespace App\Controller;

use App\Swagger\SwaggerDecorator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
  public function __construct()
  {
  }

  /**
   * @Route("/stat")
   */
  public function sdfsdfsdfsdf(): Response
  {
    return $this->json([
      'books_count' => 1000,
      'topbooks_count' => 100,
    ]);
  }

}
