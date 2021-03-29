hmbMenu.onclick = function(s) {
    if (typeof(s) == "object")
        return
    switch (s) {
        case "Dessert Voting":
            ChangeForm(dessertVoting)
            break
        case "Describe Me":
            ChangeForm(describeYou)
            break
        case "Favorite Exercises":
            ChangeForm(favExercises)
            break
        case "Mobile Nav":
            ChangeForm(mobileNav)
            break
    }
}