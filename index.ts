console.log(`
               AAA                                      CCCCCCCCCCCCC      222222222222222         000000000      222222222222222     333333333333333   
              A:::A                                  CCC::::::::::::C     2:::::::::::::::22     00:::::::::00   2:::::::::::::::22  3:::::::::::::::33 
             A:::::A                               CC:::::::::::::::C     2::::::222222:::::2  00:::::::::::::00 2::::::222222:::::2 3::::::33333::::::3
            A:::::::A                             C:::::CCCCCCCC::::C     2222222     2:::::2 0:::::::000:::::::02222222     2:::::2 3333333     3:::::3
           A:::::::::A            ooooooooooo    C:::::C       CCCCCC                 2:::::2 0::::::0   0::::::0            2:::::2             3:::::3
          A:::::A:::::A         oo:::::::::::oo C:::::C                               2:::::2 0:::::0     0:::::0            2:::::2             3:::::3
         A:::::A A:::::A       o:::::::::::::::oC:::::C                            2222::::2  0:::::0     0:::::0         2222::::2      33333333:::::3 
        A:::::A   A:::::A      o:::::ooooo:::::oC:::::C                       22222::::::22   0:::::0 000 0:::::0    22222::::::22       3:::::::::::3  
       A:::::A     A:::::A     o::::o     o::::oC:::::C                     22::::::::222     0:::::0 000 0:::::0  22::::::::222         33333333:::::3 
      A:::::AAAAAAAAA:::::A    o::::o     o::::oC:::::C                    2:::::22222        0:::::0     0:::::0 2:::::22222                    3:::::3
     A:::::::::::::::::::::A   o::::o     o::::oC:::::C                   2:::::2             0:::::0     0:::::02:::::2                         3:::::3
    A:::::AAAAAAAAAAAAA:::::A  o::::o     o::::o C:::::C       CCCCCC     2:::::2             0::::::0   0::::::02:::::2                         3:::::3
   A:::::A             A:::::A o:::::ooooo:::::o  C:::::CCCCCCCC::::C     2:::::2       2222220:::::::000:::::::02:::::2       2222223333333     3:::::3
  A:::::A               A:::::Ao:::::::::::::::o   CC:::::::::::::::C     2::::::2222222:::::2 00:::::::::::::00 2::::::2222222:::::23::::::33333::::::3
 A:::::A                 A:::::Aoo:::::::::::oo      CCC::::::::::::C     2::::::::::::::::::2   00:::::::::00   2::::::::::::::::::23:::::::::::::::33 
AAAAAAA                   AAAAAAA ooooooooooo           CCCCCCCCCCCCC     22222222222222222222     000000000     22222222222222222222 333333333333333   
`);

const day = Bun.argv[2];
const part = Bun.argv[3];

if (!day || !part) {
  console.error("Please specify a day and a part to run.");
  process.exit(1);
}

console.log(`Now solving day ${day} part ${part}`);
console.log("---============---");

const solver = await import(`./solvers/${day}/${part}.ts`);
if (!solver.solve) {
  console.error("Solver does not expose a solve function.");
  process.exit(1);
}

const inputFile = Bun.file(`inputs/${day}.txt`);
if (!(await inputFile.exists())) {
  console.error("Input file does not exist.");
  process.exit(1);
}

const input = (await inputFile.text()).trim();
console.log(solver.solve(input));
