package pacage.pro;

import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.lang.String;
class Date{
    private int day,month,year;

    public Date(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }
    
}

public class Main {

    public static void main(String[] args) {

    }

    public static boolean isSameDay(Date date1, Date date2) {
        return date1.getDay()==date2.getDay() && date1.getMonth()==date2.getMonth() && date1.getYear()==date2.getYear();
    }

    public static void isFirst(Date date1, Date date2) {
        if(date1.getYear()<date2.getYear()){
            System.out.println("First date precedes another");
        }else if(date2.getYear()<date1.getYear()){
            System.out.println("Second date precedes another");
        }else {
            if (date1.getMonth()<date2.getMonth()){
                System.out.println("First date precedes another");
            }else if(date2.getMonth()<date1.getMonth()){
                System.out.println("Second date precedes another");
            }
            else {
                if(date1.getDay()<date2.getDay()){
                    System.out.println("First date precedes another");
                }else if(date2.getDay()<date1.getDay()){
                    System.out.println("Second date precedes another");
                }
                else {
                    System.out.println("TWO DATES ARE EQUAL");
                }
            }
        }
    }

    public static boolean isLeap(Date date){
        if (((date.getYear() % 4 == 0) && (date.getYear() % 100!= 0)) || (date.getYear()%400 == 0))
            return true;
        else
            return false;
    }

}

