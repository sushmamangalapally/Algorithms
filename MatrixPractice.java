import java.lang.*;
import java.util.*;

public class MatrixPractice {
  public static void matrices(int[][] mat1, int[][] mat2){
  for(int i = 0; i < 2; i++){
    for(int j = 0; j < 2; j++){
      System.out.println(mat1[i][j]);
      System.out.println(mat2[i][j]);
    }
  }

}

    public static void main(String[] args) {
        matrices({{3,2},{1,2}}, {{3,2},{1,2}});
        // Portfolio get = new Portfolio();
        // Project projectnumerouno = new Project("Project #1", "Description 1");
        // Project projectnumerodos = new Project("Project #2", "Description 2");
        // Project projectnumerotres = new Project("Project #3", "Description 3");
        // projectnumerouno.setinitialCost(10.0);
        // projectnumerodos.setinitialCost(12.0);
        // projectnumerotres.setinitialCost(14.0);
        //
        // projectnumerouno.elevatorPitch();
        // projectnumerodos.elevatorPitch();
        // projectnumerotres.elevatorPitch();
        //
        // get.addToPortfolio(projectnumerodos);
        // get.addToPortfolio(projectnumerouno);
        // get.addToPortfolio(projectnumerotres);
        // System.out.println(get.getPortfolioCost());
		    //   get.showPortfolio();
    }
}
