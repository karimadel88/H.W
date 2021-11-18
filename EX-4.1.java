public class Main {

    public static void main(String[] args) {
	    int xLire = 55;
        System.out.println(xLire + "Lire is : " +convertLireEuro(xLire)+"Euro");
    }
    // Function To Convert From Lire To Euro
    public static double convertLireEuro(int x){
        return (0.85 * x);
    }
}
