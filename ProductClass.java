// package pacage.pro;
class Product {
    private String name;
    private int numberOfPieces;
    public Product(String name) {
        this.name = name;
        this.numberOfPieces = 0;
    }

    public void downLoad(int amount){
        numberOfPieces += amount;
    }

    public void upLoad(int amount){
        numberOfPieces -= amount;
    }

    @Override
    public String toString() {
        return
                "'" + name + '\'' + " " + numberOfPieces +
                        " Pieces ";
    }
}

public class Main {

    public static void main(String[] args) {
        Product lamp = new Product("Lamp 60 Watt");
        System.out.println("Before the loading: " + lamp);
        lamp.downLoad(1000);
        lamp.upLoad(100);
        System.out.println("After the loading: " + lamp);

    }
}
