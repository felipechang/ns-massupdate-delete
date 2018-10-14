# Overview
 Mass record deletion with a halt switch.

# Installation
Place the out javascript files in the SuiteScripts folder of your NetSuite account.

# Usage
- Deploy the delete_massupdate.js as a Mass Update
- Create a script parameter custscript_mass_delete_halt with type checkbox.
- Use a custom mass update to select the records to be deleted.
- Once the mass update is running, you can stop it by checking the parameter box on the script page.

# License
GNU GPL see LICENSE.

**Use at your own discretion. Test before using in production.**

# Author
Felipe Chang <felipechang@hardcake.org>
