//package pacage.pro;
import java.lang.Math;
import java.util.Locale;
import java.util.Scanner;

public class Main {
        public static void main(String[] args) {
            Scanner in = new Scanner(System.in);
            in.useLocale( Locale.US );
            // value a, b, and c
            System.out.println("Enter a, b, c");
            float a , b , c;
            a   = in.nextFloat();
            b = in.nextFloat();
            c = in.nextFloat();
            double root1, root2;

            // calculate the determinant (b2 - 4ac)
            double determinant = b * b - 4 * a * c;

            // check if determinant is greater than 0
            if (determinant > 0) {

                // two real and distinct roots
                root1 = (-b + Math.sqrt(determinant)) / (2 * a);
                root2 = (-b - Math.sqrt(determinant)) / (2 * a);

                System.out.println("root1 = "+root1+" and root2 = " + root2);
            }

            // check if determinant is equal to 0
            else if (determinant == 0) {

                root1 = root2 = -b / (2 * a);
                System.out.println("root1 = root2 = " + root1);
            }

            // if determinant is less than zero
            else {

                // roots are complex number and distinct
                double real = -b / (2 * a);
                double imaginary = Math.sqrt(-determinant) / (2 * a);
                System.out.println("root1 = " + real+" + " + imaginary+"!");
                System.out.println("root2 = "+ real+" - " + imaginary+"!");
            }
        }
    }

