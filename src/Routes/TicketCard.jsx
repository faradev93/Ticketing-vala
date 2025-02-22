const TicketCard = (props) => {
  return (
    <div>
      <div className="shadow-red-500/40 shadow-xl bg-lime-700/50 border-2 border-red-500/80 h-[280px] w-[340px] rounded-2xl p-4 m-2 flex flex-col gap-6">
        <p className="text-2xl font-mono">
          Ticket #
          <span className="text-2xl bg-amber-500/60 rounded-[50px] font-bold p-0.5">
            {props.ticket.id}
          </span>
        </p>
        <p className="text-xl font-sans ">This is a ticket description</p>
        <p>
          Added Date:<span className="bg-red-600">{props.ticket.addedDate}</span>
        </p>
        <p>
          Price: <span className="bg-red-600">{props.ticket.price}</span>$
        </p>
        <p>
          Available Seat:<span className="bg-red-600">{props.ticket.seats}</span>
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
