<?php

namespace App\Repository;

use App\Entity\BodyPart;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BodyPart|null find($id, $lockMode = null, $lockVersion = null)
 * @method BodyPart|null findOneBy(array $criteria, array $orderBy = null)
 * @method BodyPart[]    findAll()
 * @method BodyPart[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BodyPartRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BodyPart::class);
    }

    // /**
    //  * @return BodyPart[] Returns an array of BodyPart objects
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
    public function findOneBySomeField($value): ?BodyPart
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
