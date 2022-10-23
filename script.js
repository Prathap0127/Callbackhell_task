
        function display() {
            var display = document.getElementById('content_hell')
            setTimeout(() => {
                display.innerText = "10"
                setTimeout(() => {
                    display.innerText = "9"
                    setTimeout(() => {
                        display.innerText = "8"
                        setTimeout(() => {
                            display.innerText = "7"
                            setTimeout(() => {
                                display.innerText = "6"
                                setTimeout(() => {
                                    display.innerText = "5"
                                    setTimeout(() => {
                                        display.innerText = "4"
                                        setTimeout(() => {
                                            display.innerText = "3"
                                            setTimeout(() => {
                                                display.innerText = "2"
                                                setTimeout(() => {
                                                    display.innerText = "1"
                                                    setTimeout(() => {
                                                        display.innerHTML = "<span>Happy Independence Day<span>"


                                                    }, 1000)


                                                }, 1000)


                                            }, 1000)

                                        }, 1000)

                                    }, 1000)

                                }, 1000)

                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)
            }, 1000)
        }
        display()
