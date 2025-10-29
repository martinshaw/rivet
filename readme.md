# Rivet

Pages - Forms - Articles; a simple yet powerful free self-hostable CMS platform

## More information

For more information about Rivet, please refer to the ~~[documentation](https://rivet.martinshaw.co)~~ coming soon.

## Installation

To install Rivet, follow these steps:

0. Install the required software:
   - PHP 8.1 or higher with the following extensions: BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML, GD, Curl and PHPRedis.
   - Composer
   - Node.js and npm
   - A database server (MySQL, PostgreSQL, SQLite, etc.)
   - A web server (Apache, Nginx, etc.)
   - Redis server

   If you are installing Rivet on your local machine for development purposes, I would recommend that you use [Laravel Herd](https://herd.laravel.com/) with [DBngin](https://dbngin.com) to manage these components of your local development environment.

   If you are installing Rivet on a production server, I would recommend that you use a service like [Laravel Forge](https://forge.laravel.com) to manage your server and deployment, or contact a specialist to help you set up these components securely.

1. Clone the repository:
   ```bash
   git clone https://github.com/martinshaw/rivet.git
   ```

2. Change the project directory name to your desired application name:
   ```bash
   mv rivet your-project-name
   cd your-project-name
   ```

   ... with `your-project-name` replaced with your desired application name.

2. Install the dependencies:
   ```bash
   composer install
   npm install
   ```

3. Copy the development or production environment file:
   ```bash
   cp .env.example.production .env # For development, use .env.example.development
   ```

   Then, generate the application key:
   ```bash
   php ./artisan key:generate
   ```

   In the future, this will be replaced with a CLI installation wizard `php ./artisan rivet:configure`

4. Migrate and seed the database:
   ```bash
   php ./artisan migrate --seed
   ```

   You will need to press enter to select the option to create the database when prompted.

4. Build the frontend assets:
   ```bash
   npm run build
   ```

5. Run daemon processes:
   ```bash
   composer run production # For development, use `composer run dev`
   ```

6. Setup scheduler cron job:
   When developing Rivet, the `composer run dev` command will run the Laravel scheduler in a separate process (skip this step). However, in production, you will need to set up a cron job to run the scheduler.

   You can do this by adding the following line to your server's crontab file using `crontab -e`:

   ```bash
   * * * * * cd /your-project-name && php artisan schedule:run >> /dev/null 2>&1
   ```

   ... with `/your-project-name` replaced with the actual path to your Rivet installation.

   To exit the crontab editor (if vim), you may need to press `Esc`, then type `:wq` and press `Enter`. 
