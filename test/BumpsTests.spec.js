describe("Bumps", function(){
    describe("Given a string that shows a flat road", function(){
        it("Should return woohoo!", function(){
            //Arrange
            let bumps = new Bumps();
            //Act
            let actual = bumps.CheckCarStatus("_________");
            //Assert
            expect(actual).toBe("WhooHoo!");
        })
    })

    describe("Given a string that shows a road with 5 bumps", function(){
        it("Should return woohoo!", function(){
            //Arrange
            let bumps = new Bumps();
            //Act
            let actual = bumps.CheckCarStatus("_nnnnn___");
            //Assert
            expect(actual).toBe("WhooHoo!");
        })
    })

    describe("Given a string that shows a road with 18 bumps", function(){
        it("Should return Car Dead!", function(){
            //Arrange
            let bumps = new Bumps();
            //Act
            let actual = bumps.CheckCarStatus("_nnnnn__nnn__nn_n_nnnnn__nn_");
            //Assert
            expect(actual).toBe("Car Dead");
        })
    })

    describe("Given a string that shows a road with 15 bumps", function(){
        it("Should return WhooHoo!", function(){
            //Arrange
            let bumps = new Bumps();
            //Act
            let actual = bumps.CheckCarStatus("_nnnnn__nnn__nn_n_nnnn___");
            //Assert
            expect(actual).toBe("WhooHoo!");
        })
    })
})