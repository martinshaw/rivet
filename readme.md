# Rivet

Pages - Forms - Articles; a simple yet powerful free self-hostable CMS platform

## More information

For more information about Rivet, please refer to the ~~[documentation](https://rivet.martinshaw.co)~~ coming soon.

## Installation

To install Rivet, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/martinshaw/rivet.git
   cd rivet
   ```

2. Install the dependencies:
   ```bash
   composer install
   npm install
   ```

3. Copy the production environment file:
   ```bash
   cp .env.example .env
   php ./artisan key:generate
   ```

   In the future, this will be replaced with a CLI installation wizard `php ./artisan rivet:configure`

4. Build the project:
   ```bash
   npm run build # This creates the production JavaScript assets
   composer run production # This runs the queue worker, scheduler, and other daemons... 
   ```

   For development, you can use `composer run dev` instead which also runs `npm run dev`
