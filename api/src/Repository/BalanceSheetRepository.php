<?php

namespace App\Repository;

use App\Entity\BalanceSheet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BalanceSheet|null find($id, $lockMode = null, $lockVersion = null)
 * @method BalanceSheet|null findOneBy(array $criteria, array $orderBy = null)
 * @method BalanceSheet[]    findAll()
 * @method BalanceSheet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BalanceSheetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BalanceSheet::class);
    }

    // /**
    //  * @return BalanceSheet[] Returns an array of BalanceSheet objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BalanceSheet
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
