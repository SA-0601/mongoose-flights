const React = require('react');

function New(){
    return(
        <div>
            <h1>Add New Flight here</h1>
                <form action='/flights' method='POST'>
                    Airline:  <input type="text" name="airline"/>
                    <br/>
                    Flight Number: <input type="number" name="flightNo"/>
                    <br/>
                    Departs on: <input type="datetime-local" name="departs"/>
                    <br/>
                    <input type="submit" value="Create new Flight"/>
                </form>
        </div>
        )
}

module.exports = New;