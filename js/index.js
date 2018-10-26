  // 1. when we scroll, we want to run a function
  // 2. we want to figure out how far down the page we have scrolled
  // 3. we want to display the pixels we've scrolled inside of our .progress div

  $(document).on('scroll', function() {

    // the scrollTop method gives us back a pixel value for how far it is to the top of the page (from our current position)
    var pixelsFromTop = $(document).scrollTop()

    if(pixelsFromTop > 50) {
      $('header').addClass('hidden')
    }else{
      $('header').removeClass('hidden')
    }

    if(pixelsFromTop < 600) {
      $('body').css('background-color', '#fff')
    }else if(pixelsFromTop < 1400) {
      $('body').css('background-color', '#a29c97')
    }else if(pixelsFromTop < 2200) {
      $('body').css('background-color', '#d9dfe4')
    }else if(pixelsFromTop < 3000) {
      $('body').css('background-color', '#fff0f0')
    }else {
      $('body').css('background-color', '#cdccc7')
    }

    // 1. make some variables for our documentHeight and windowHeight
    // 2. make a variable to work out the difference between the two (as we are comparing this to our scrollTop position which goes from the top of the window). So it will be documentHeight - windowHeight
    // 3. using the difference and the scrollPosition, divide them into each other to make a percentage
    // 4. multiply by 100% to get back a % value

    var documentHeight = $(document).height()
    var windowHeight = $(window).height()

    var difference = documentHeight - windowHeight

    var percentage = 100 * pixelsFromTop / difference

    // here we join the number of % scrolled with the % symbol (otherwise it assumes we're talking about pixels)
    $('.bar').css('width', percentage + '%')

  })






