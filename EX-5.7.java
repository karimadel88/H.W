package com.company;

import java.lang.String;
import java.util.Scanner;

class Date{
    private int day, month, year;

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
        Scanner in = new Scanner(System.in);

        System.out.println("Enter The Date in The Form D M Y:");
        Date date = new Date(in.nextInt(), in.nextInt(), in.nextInt());

        System.out.println("Enter The Date You Want Compare:");
        Date dateToCompare = new Date(in.nextInt(), in.nextInt(), in.nextInt());
        if (isSameDay(date, dateToCompare)) {
            System.out.println("It's The Same Date.");
        } else {
            System.out.print("Not The Same Date, and ");
            isFirst(date, dateToCompare);
        }

        System.out.print("The Year " + date.getYear());
        if (isLeap(date)) {
            System.out.println(" is a Leap Year.");
        } else {
            System.out.println(" is Not a Leap Year.");
        }

        System.out.print("The Day After " + date.getDay() + "/" + date.getMonth() + "/" + date.getYear());
        System.out.println(" is " + nextDay(date).getDay() + "/" + nextDay(date).getMonth() + "/" + nextDay(date).getYear());
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
            }else {
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
        return ((date.getYear() % 4 == 0) && (date.getYear() % 100 != 0)) || (date.getYear() % 400 == 0);
    }

    public static Date nextDay(Date date){
        int[] months = {31, (isLeap(date) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        if (date.getDay() < months[date.getMonth() - 1]) {
            date.setDay(date.getDay() + 1);
        }else if (date.getMonth() < 12) {
            date.setMonth(date.getMonth() + 1);
        }else {
            date.setYear(date.getYear() + 1);
        }
        return date;
    }
}
