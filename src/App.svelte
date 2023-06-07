<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Index from './pages/index.svelte';
  import Profile from './pages/profile.svelte';
  import Company from './pages/company.svelte';
  import Companies from './pages/companies.svelte';
  import Forums from './pages/forums.svelte'
</script>

<Router>
  <Route component={Index} />
  <Route path="/companies" component={Companies} />
  <Route path="/company/:id" component={Company} />
  <Route path="/profile" component={Profile} />
  <Route path="/forums" component={Forums} />
</Router>