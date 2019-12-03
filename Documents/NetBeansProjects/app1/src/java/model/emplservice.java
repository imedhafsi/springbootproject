/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 *
 * @author Worgroup
 */
public class emplservice {
  Session session=NewHibernateUtil.getSessionFactory().openSession();
  Transaction tx;
  public void addempl(employe emp){
  try{tx=session.beginTransaction();
  session.save(emp);
  tx.commit();
  System.out.println("succes");
  }
  catch(Exception e){e.printStackTrace();}
  }
}
