//package pacage.pro;

import java.util.Scanner;
import java.lang.String;

public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Your Text To Check Some rules");
        int cnt = 0;
        String text = in.next();

        if(isVowel(text.charAt(0))){
            System.out.print("MAYBE");
            cnt++;
        }

        if(isSomeVowelAIU(text.charAt(text.length()-1))){
            if(cnt>0)
                System.out.print(", " + "YES");
            else
                System.out.println("YES");
        }
        else if(isSomeVowelEO(text.charAt(text.length()-1))){
            if(cnt>0)
                System.out.print(", "+"NO");
            else
                System.out.println("NO");
        }
        else {
            if(cnt>0)
                System.out.print(", "+"DON'T KNOW");
            else
                System.out.println("DON'T KNOW");
        }
    }

    public static boolean isVowel(char a){
        if(a=='a' || a=='e' ||a=='i' ||a=='u'||a=='o'|| a=='A' || a=='E' ||a=='I' ||a=='U'||a=='O'){
            return true;
        }else return false;
    }
    public static boolean isSomeVowelAIU(char a){
        if(a=='a'||a=='i' ||a=='u'||a=='A'||a=='I' ||a=='U')return true;
        else return false;
    }
    public static boolean isSomeVowelEO(char a){
        if(a=='e'||a=='O'||a=='E'||a=='o'){
            return true;
        }
        else return false;
    }

}
