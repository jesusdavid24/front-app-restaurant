import RegistrationComponent  from '../../components/Registration'
import { useLoaderData } from 'react-router-dom'

import { getRoles } from '../../api/roles'

const RegistrationPages = () => {

  const { roles } = useLoaderData()

  return (
    <div>
      <RegistrationComponent roles={roles} />
    </div>
  )
}

export default RegistrationPages

export const loaderRegistration = async () => {
  const data = await getRoles();
  return { roles: data };
};
