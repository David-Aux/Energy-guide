const corePayload = {
  id: currentUser.id,
  role: currentUser.role || 'vendor',
  is_vendor: true,
  company_name: get('vpBusiness') || get('vpFullName'),
  full_name: get('vpFullName'),
  business_name: get('vpBusiness'),
  phone: get('vpPhone'),
  state: get('vpState'),
  city: get('vpCity'),
  address: get('vpAddress'),
};