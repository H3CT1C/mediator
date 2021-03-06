## Inspiration
Recently when traveling, there have been cases where I have either not been able to show up to the flight due to emergencies, or simply wanting to prolong my travels. Unfortunately, most airlines do not allow refunds on cancellations outside of the 24 hour purchase period. The main task was to solve this problem, while still allowing Delta to make a profit off of these scenarios and in return, make customer is happy.

## What it does
Offers a feature for Delta airline passengers to re-list tickets they had previously purchased by putting it up for sale again ad allowing other passengers to buy another passenger's ticket. The user will not receive a refund _until_ someone purchases the ticket they have re-listed; therefore, Delta does not have to worry about any risks involved in reselling the ticket.

## How we built it
With the MEAN stack along with the API's Delta provided for us (Thanks Delta!). We also ensured that it supported mobile devices due to studies showing that millennial's are heavily using their phones for all things travel. We were planning on changing the confirmation number whenever someone purchased the ticket, because otherwise they could still attempt to checkin for the flight, but we decided to encrypt the confirmation number to avoid having to do so.

## Challenges we ran into
The exposed API's that Delta provided did not provide all the functionality we needed, specifically the lack of being able to send PUT, and POST requests. While understandable that PUT and POST requests would not be made public, it still posed as a hurdle. We decided to use the API's to act as seed files for the database.

## Accomplishments that we're proud of
One of the hurdles of this project was trying to figure out how to allow customers to make the money back from the ticket purchase, while still allowing Delta to either make a profit or at a minimum not lose any money. There are several solutions that can all help cover this case, and allow all types of passengers (sky club members, first class passengers, etc) some kind of ability to get their money back in the event where they would have not been able to show up.

So we came up with this scenario:

> Suppose their is a flight with 100 first class tickets and I bought 5 for $0.50. Then the price of the flight rises to $1.00 and then they sell the rest of the 95 tickets.

```
tickets = 100
Purchased _By_Me = 5
My_Rate = $0.50
Remaining_Tickets_Purchased = 95
Rate = $1.00

(Purchased_By_Me * My_Rate) + (Remaining_Tickets_Purchased * Rate) = Total Profit

(5 * .5) + (95 * 1) = 97.50

```

The total profit that Delta would have originally made on that flight would have been 97.50. With mediator the math changes slightly in the case where I decide to sell my 5 tickets (this is indicated by resales)

```
Tickets = 100
Purchased _By_Me = 5
My_Rate = $0.50
Remaining_Tickets_Purchased = 95
Rate = $1.00
Resales = 5
Difference = .5

(Purchased_By_Me * My_Rate) + (Remaining_Tickets_Purchased * Rate) + (Resales * Difference) = Total Profit

(5 * .5) + (95 * 1) + (5 * .5) = 100
```
The difference is calculated by the change in price of what it was initially purchased for and the current price of the flight tickets. In the case of the flight being cheaper than the original price, the change in price would affect the amount of money I receive, and not affect Deltas profit. This means that resales and difference must be greater than 0, so Delta will not have any loss with this. While the numbers were chosen for convenience and simplicity, This would be applied to all passenger groups (first class, business, economy, etc). This allows Delta to make some potential profit by taking the difference in the ticket prices from when it was previously purchased to when it was resold, all while still effectively giving the customer a refund.


## What we learned
How to use Delta airlines API along with familiarizing ourselves with Node, Angular, and Jade.

## What's next for Mediator
- To keep track of ticket prices.
- Allow Delta sky club members to re-list their tickets and have them be sold as the next available ticket for the flight. While Delta may not receive a profit on that transaction, it would incentivize passengers to become sky club members.
- See this as a possible opportunity and as a new approach to refund customers for their flights while still maximizing profit.

## Demo

### Home Page

![home](/client/assets/images/home.png)

### Trips Page

![home](/client/assets/images/trips.png)

### Mediator Page

![home](/client/assets/images/mediator.png)
