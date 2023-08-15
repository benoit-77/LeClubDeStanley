<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'cinema' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ajOuOzd<%D(|;uV;[l|,U/=(b3]?l>vB^;=ElrJ(,u>I$.a,CM3-%l1*(/gJ^gLp' );
define( 'SECURE_AUTH_KEY',  'E9p?qkElazu*PG%<&02zX+q0jko#C;l}&t9F]0o+%N)wTuHy.>[wv;tp.c~%@Kc7' );
define( 'LOGGED_IN_KEY',    'o#-;I{KE<} jr58FI_ScC!]UVV BsY/d(C!$CG)RdUJLK%NKfC-UkO:n`%_icTju' );
define( 'NONCE_KEY',        'x]bHf6{Z8< u.c#b)t_TTl2SqOfUkBepCKcBog<~:p=9}|3hq.;7_hwIX Sbad)e' );
define( 'AUTH_SALT',        'loPSVsF7-J2wA6}mp@[F=QW7mn8CcL)9l7uAIpmA|SAd^[PU0VQQbq~GJ|vMH>$W' );
define( 'SECURE_AUTH_SALT', 'l?q`;1.Uzw4v:doScQ)s`4-]17}cepS$YC)g:y~|*CHXN@_1i`{Y^,o#@tdM02U ' );
define( 'LOGGED_IN_SALT',   '&!1MZ6&QlhL5peR(HH48E!1X%yml|37,;FGp&*xz7xn=T{d10R*KUy(w5aPSrT{+' );
define( 'NONCE_SALT',       'PK~&x3x|Lb|=j]#RC[{?Bk-`>ZpbX,~c)S34jF-ND/hbdnDA]Y))=R#A|CpbY.d.' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
