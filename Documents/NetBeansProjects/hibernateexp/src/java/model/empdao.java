/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.*;
/**
 *
 * @author Worgroup
 */
public class empdao {
   SessionFactory fac=hibutils.getSessionFactory();
   Session s=fac.getCurrentSession();
   Transaction tx=null;
   public static void main(String[]args){
   Employe e=new Employe();
   e.setId(2);
   e.setNom("imed");
   e.setPrenom("haf");
   e.setAge(30);
   e.setPos("ing");
  
  try{
 tx= s.getTransaction();
 tx.begin();
  s.save(e);
  s.getTransaction().commit();
  System.out.println("ok");}
  catch(Exception ee){ee.getMessage();}
      
  }
}
