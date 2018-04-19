describe("the application", function(){
  it("moves the content from first container to second", function(){
      startApp();
      var firstContainer = document.querySelector('.first-container');
      var secondContainer = document.querySelector('.second-container');
      expect(secondContainer.innerHTML).toEqual("");
      var expectedHTML = firstContainer.innerHTML.trim();

      document.getElementById('button').click();

      expect(secondContainer.innerHTML)
          .toContain(expectedHTML);
  });
});
