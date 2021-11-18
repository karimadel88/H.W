import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
	    // Read Two Number From User
        int num1 = in.nextInt(), num2 = in.nextInt();

        // divide sum by 2
        long sum = num1 + num2;
        double resOfDivideSum = sum/2;
        System.out.println("Sum Of Two Integers = "+ sum);
        System.out.println("After divide sum the result = "+resOfDivideSum);

        // Square root of product
        long product = num1 * num2;
        double squareOfProduct = Math.sqrt(product);
        System.out.println("The Square of product last two number = " + squareOfProduct);

    }
}
