<?php


namespace App\Controller;

use App\Entity\BalanceSheet;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Response;

class GetShortBalanceSheet
{
  private $balanceSheetPublishHandler;

  private $entitym;

//  public function __construct(BalanceSheetPublishHandler $balanceSheetPublishHandler)
  public function __construct(EntityManagerInterface $entityManager)
  {
    $this->entitym = $entityManager;
//    $this->balanceSheetPublishHandler = $balanceSheetPublishHandler;
  }

  public function __invoke(BalanceSheet $data)
  {


    return new Response(json_encode($data), 200);
  }
}
