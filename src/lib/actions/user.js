import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';


export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses,
    username
) => {
    try {
        await connect();
        const user = await User.findByIdAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    profilePicture: image_url,
                    email: email_addresses[0].email_addresses,
                    username
                }
            }
        );
    } catch (error) {

    }
};