//package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        System.out.println("Enter the lengths of sides : ");
        double a, b, c;
        System.out.println("a is equal = ");
        a = x.nextDouble();
        System.out.println("b is equal = ");
        b = x.nextDouble();
        System.out.println("c is equal = ");
        c = x.nextDouble();
        if (a <= 0 || b <= 0 || c <= 0){
            System.out.println("Invalid Inputs");
        } else if (a == b && b == c){
            System.out.println("Equilateral Triangle");
        }else if (((a * a) + (b * b)) == (c * c) || ((a * a) + (c * c)) == (b * b) || ((b * b) + (c * c)) == (a * a)){
            System.out.println("Right Triangle");
        }
        else if (a != b && b != c && a != c){
            System.out.println("Scale sided Triangle");
        }
        else if ((a == b) || (b == c) || (a == c)){
            System.out.println("Isosceles Triangle");
        }
        else if (((a * a) + (b * b)) > (c * c) || ((a * a) + (c * c)) > (b * b) || ((b * b) + (c * c)) > (a * a)){
            System.out.println("Acute Triangle");
        }else if (((a * a) + (b * b)) < (c * c) || ((a * a) + (c * c)) < (b * b) || ((b * b) + (c * c)) < (a * a)){
            System.out.println("Obtuse Triangle");
        }   else {
            System.out.println("Cannot form a Triangle");
        }
    }
}
