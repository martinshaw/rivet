<?php
/**
 * All Rights Reserved, (c) 2025 rivet.
 *
 * Author:      Martin Shaw (developer@martinshaw.co)
 * Created:     2025-11-03T18:02:35.974Z
 * Modified:     2025-11-03T19:31:25.003Z
 * File Name:   rivet.php
 *
 * Description: description
 */

/**
 * This routes file will be automatically created when Rivet is installed.
 * It is updated by the Rivet CMS when Rivet Pages are created, updated, or deleted.
 * A separate routes file is used to avoid conflicts with existing application routes and mistakes when programmatically rewriting the file.
 */

/**
 * In the future, this will be replaced with dynamic route generation based on
 * Rivet Page definitions stored in the database.  (Same for forms, etc.)
 * On creation of a Rivet Page, a dedicated modifiable route will be generated here.
 * On update of a Rivet Page, the corresponding route will be updated here (unless the RewriteOnUpdate attribute is removed).
 * On deletion of a Rivet Page, the corresponding route will be removed from here.
 * For now, these hardcoded routes serve as placeholders for the main site pages for Alex's site
 * ...
 */

/**
 * Example of a Rivet Page route stub which is added when creating a new page using the UI which has a slug of 'news'.
 * This route uses the RouteToRivetPage attribute to determine which page (and therefore which layout and content) to render as defined in the database.
 */

/**
 * @see For more up-to-date ideas / pseudo-code, see my Obsidian notes obsidian://open?vault=Obsidian%20Vault&file=Products%2FRivet%2FIdea
 */
// use \App\Http\Controllers\NewsController;

// #[RouteForRivetPage(
// 	'news',
//     changeRouteDefinitionOnPageUpdate: true,
//     removeRouteDefinitionOnPageDelete: true,
// )]
// Route::get('/news', [NewsController::class, 'show'])
//     ->name('news')
//     ->middleware(['auth', SomeMiddlewareClass::class]);
