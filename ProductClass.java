public class Product {
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
