import AuctionForm from "../../../components/AuctionForm";

const AddAuction = () => {
    // Set Active Link
    window.localStorage.setItem("activeLink", "addAuc");

    return (
        <div>
            <h1>Add New Auction</h1>
            <AuctionForm for="add" />
        </div>
    );
}

export default AddAuction;