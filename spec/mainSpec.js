describe("the application", function () {
	it("moves the content from first container to second", function () {
		startApp();
		var firstContainer = document.querySelector('.list1');
		var secondContainer = document.querySelector('.list2');
		expect(secondContainer.innerHTML).toEqual("");
		var expectedHTML = firstContainer.innerHTML.trim();

		document.querySelector('.add').click();

		expect(secondContainer.innerHTML)
			.toContain(expectedHTML);

		document.querySelector('.remove').click();
	});
});