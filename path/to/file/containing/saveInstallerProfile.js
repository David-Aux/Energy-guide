const corePayload = {
  id: currentUser.id,
  role: currentUser.role || 'installer',
  is_installer: true,
  company_name: get('ipBusiness') || get('ipFullName'),
  full_name: get('ipFullName'),
  business_name: get('ipBusiness'),
  phone: get('ipPhone'),
  state: get('ipState'),
  city: get('ipCity'),
  service_area: get('ipServiceCity') || get('ipCity'),
  address: get('ipServiceCity'),
};