'use strict';

var stations = [
    { 'id': "87545269", 'name': "Ablon" },
    { 'id': "87386052", 'name': "Achères Grand Cormier" },
    { 'id': "87381657", 'name': "Achères Ville" },
    { 'id': "87271460", 'name': "Aéroport Ch. de Gaulle 1" },
    { 'id': "87001479", 'name': "Aéroport Ch. de Gaulle 2 TGV" },
    { 'id': "87381491", 'name': "Andrésy" },
    { 'id': "87543090", 'name': "Angerville" },
    { 'id': "87381848", 'name': "Argenteuil" },
    { 'id': "87545467", 'name': "Arpajon" },
    { 'id': "87381137", 'name': "Asnières sur Seine" },
    { 'id': "87545251", 'name': "Athis Mons" },
    { 'id': "87386730", 'name': "Aubergenville Elisabethville" },
    { 'id': "87271411", 'name': "Aulnay sous Bois" },
    { 'id': "87276543", 'name': "Auvers sur Oise" },
    { 'id': "87543207", 'name': "Avenue du Pdt Kennedy" },
    { 'id': "87381038", 'name': "Avenue Foch" },
    { 'id': "87381046", 'name': "Avenue Henri Martin" },
    { 'id': "87684191", 'name': "Bagneaux sur Loing" },
    { 'id': "87681437", 'name': "Ballancourt" },
    { 'id': "87382002", 'name': "Bécon les Bruyères" },
    { 'id': "87393116", 'name': "Bellevue" },
    { 'id': "87276550", 'name': "Belloy Saint-Martin" },
    { 'id': "87276642", 'name': "Bessancourt" },
    { 'id': "87393363", 'name': "Beynes" },
    { 'id': "87328328", 'name': "Bibliothèque François Mitterrand" },
    { 'id': "87393546", 'name': "Bièvres" },
    { 'id': "87684407", 'name': "Boigneville" },
    { 'id': "87381079", 'name': "Bois Colombes" },
    { 'id': "87682203", 'name': "Bois le Roi" },
    { 'id': "87682518", 'name': "Boissise le Roi" },
    { 'id': "87381152", 'name': "Boissy l'aillerie" },
    { 'id': "87113407", 'name': "Bondy" },
    { 'id': "87415893", 'name': "Bonnières" },
    { 'id': "87276444", 'name': "Boran sur Oise" },
    { 'id': "87276485", 'name': "Bouffémont Moisselles" },
    { 'id': "87382440", 'name': "Bougival" },
    { 'id': "87543181", 'name': "Boulainvilliers" },
    { 'id': "87545178", 'name': "Bouray" },
    { 'id': "87684118", 'name': "Bourron Marlotte Grez" },
    { 'id': "87682138", 'name': "Boussy Saint-Antoine" },
    { 'id': "87681478", 'name': "Boutigny" },
    { 'id': "87545194", 'name': "Brétigny" },
    { 'id': "87545483", 'name': "Breuillet Bruyères le Châtel" },
    { 'id': "87545491", 'name': "Breuillet Village" },
    { 'id': "87381624", 'name': "Breval" },
    { 'id': "87682120", 'name': "Brunoy" },
    { 'id': "87276451", 'name': "Bruyères sur Oise" },
    { 'id': "87681510", 'name': "Buno Gironville" },
    { 'id': "87382655", 'name': "Cergy le Haut" },
    { 'id': "87381905", 'name': "Cergy Préfecture" },
    { 'id': "87382499", 'name': "Cergy Saint-Christophe" },
    { 'id': "87276063", 'name': "Cernay" },
    { 'id': "87682161", 'name': "Cesson" },
    { 'id': "87545152", 'name': "Chamarande" },
    { 'id': "87276519", 'name': "Champagne sur Oise" },
    { 'id': "87682450", 'name': "Champagne sur Seine" },
    { 'id': "87115873", 'name': "Champbenoist Poigny" },
    { 'id': "87276030", 'name': "Champ de Courses d'Enghien" },
    { 'id': "87393058", 'name': "Champ de Mars Tour Eiffel" },
    { 'id': "87116509", 'name': "Changis Saint-Jean" },
    { 'id': "87381475", 'name': "Chanteloup les Vignes" },
    { 'id': "87276113", 'name': "Chantilly Gouvieux" },
    { 'id': "87276162", 'name': "Chaponval" },
    { 'id': "87381194", 'name': "Chars" },
    { 'id': "87682419", 'name': "Chartrettes" },
    { 'id': "87116582", 'name': "Château Thierry" },
    { 'id': "87758607", 'name': "Châtelet les Halles" },
    { 'id': "87381228", 'name': "Chaumont en Vexin" },
    { 'id': "87382333", 'name': "Chaville Rive Droite" },
    { 'id': "87393207", 'name': "Chaville Rive Gauche" },
    { 'id': "87393173", 'name': "Chaville Vélizy" },
    { 'id': "87116111", 'name': "Chelles Gournay" },
    { 'id': "87546317", 'name': "Chemin d'Antony" },
    { 'id': "87116574", 'name': "Chézy sur Marne" },
    { 'id': "87393637", 'name': "Chilly Mazarin" },
    { 'id': "87545285", 'name': "Choisy le Roi" },
    { 'id': "87391565", 'name': "Clamart" },
    { 'id': "87381129", 'name': "Clichy Levallois" },
    { 'id': "87393272", 'name': "Coignières" },
    { 'id': "87381087", 'name': "Colombes" },
    { 'id': "87682146", 'name': "Combs la Ville Quincy" },
    { 'id': "87272047", 'name': "Compans" },
    { 'id': "87381459", 'name': "Conflans Fin d'Oise" },
    { 'id': "87381897", 'name': "Conflans Sainte-Honorine" },
    { 'id': "87681007", 'name': "Corbeil Essonnes" },
    { 'id': "87381863", 'name': "Cormeilles en Parisis" },
    { 'id': "87116731", 'name': "Couilly Saint-Germain" },
    { 'id': "87116301", 'name': "Coulommiers" },
    { 'id': "87382200", 'name': "Courbevoie" },
    { 'id': "87116772", 'name': "Crécy la Chapelle" },
    { 'id': "87276006", 'name': "Creil" },
    { 'id': "87271593", 'name': "Crépy en Valois" },
    { 'id': "87608802", 'name': "Créteil Pompadour" },
    { 'id': "87116640", 'name': "Crouy sur Ourcq" },
    { 'id': "87271536", 'name': "Dammartin Juilly Saint-Mard" },
    { 'id': "87276345", 'name': "Deuil Montmagny" },
    { 'id': "87276436", 'name': "Domont" },
    { 'id': "87684233", 'name': "Dordives" },
    { 'id': "87545525", 'name': "Dourdan" },
    { 'id': "87540179", 'name': "Dourdan la Forêt" },
    { 'id': "87271403", 'name': "Drancy" },
    { 'id': "87393488", 'name': "Dreux" },
    { 'id': "87276394", 'name': "Ecouen Ezanville" },
    { 'id': "87545475", 'name': "Egly" },
    { 'id': "87116046", 'name': "Emerainville Pontault Combault" },
    { 'id': "87276022", 'name': "Enghien les Bains" },
    { 'id': "87545228", 'name': "Epinay sur Orge" },
    { 'id': "87271148", 'name': "Epinay sur Seine" },
    { 'id': "87271122", 'name': "Epinay Villetaneuse" },
    { 'id': "87276147", 'name': "Epluches" },
    { 'id': "87386763", 'name': "Epône Mézières" },
    { 'id': "87381418", 'name': "Eragny Neuville" },
    { 'id': "87276055", 'name': "Ermont Eaubonne" },
    { 'id': "87534131", 'name': "Ermont Eaubonne" },
    { 'id': "87276584", 'name': "Ermont Halte" },
    { 'id': "87116327", 'name': "Esbly" },
    { 'id': "87681601", 'name': "Essonnes Robinson" },
    { 'id': "87545137", 'name': "Etampes" },
    { 'id': "87545145", 'name': "Etréchy" },
    { 'id': "87681387", 'name': "Evry Courcouronnes Centre" },
    { 'id': "87681361", 'name': "Evry Val de Seine" },
    { 'id': "87116277", 'name': "Faremoutiers Pommeuse" },
    { 'id': "87684241", 'name': "Ferrières Fontenay" },
    { 'id': "87682211", 'name': "Fontainebleau Avon" },
    { 'id': "87682427", 'name': "Fontaine le Port" },
    { 'id': "87393405", 'name': "Fontenay le Fleury" },
    { 'id': "87276071", 'name': "Franconville Le Plessis Bouchard" },
    { 'id': "87276659", 'name': "Frépillon" },
    { 'id': "87113514", 'name': "Gagny" },
    { 'id': "87393439", 'name': "Garancières La Queue" },
    { 'id': "87382259", 'name': "Garches Marnes la Coquette" },
    { 'id': "87381566", 'name': "Gargenville" },
    { 'id': "87276196", 'name': "Garges Sarcelles" },
    { 'id': "87393348", 'name': "Gazeran" },
    { 'id': "87271205", 'name': "Gennevilliers" },
    { 'id': "87381244", 'name': "Gisors" },
    { 'id': "87276246", 'name': "Goussainville" },
    { 'id': "87681353", 'name': "Grand Bourg" },
    { 'id': "87393645", 'name': "Gravigny Balizy" },
    { 'id': "87116012", 'name': "Gretz Armainvilliers" },
    { 'id': "87681379", 'name': "Grigny Centre" },
    { 'id': "87276360", 'name': "Groslay" },
    { 'id': "87276592", 'name': "Gros Noyer Saint-Prix" },
    { 'id': "87116269", 'name': "Guérard la Celle sur Morin" },
    { 'id': "87545129", 'name': "Guillerval" },
    { 'id': "87281899", 'name': "Haussmann Saint-Lazare" },
    { 'id': "87381889", 'name': "Herblay" },
    { 'id': "87682435", 'name': "Héricy" },
    { 'id': "87393462", 'name': "Houdan" },
    { 'id': "87386409", 'name': "Houilles Carrières sur Seine" },
    { 'id': "87393561", 'name': "Igny" },
    { 'id': "87393033", 'name': "Invalides" },
    { 'id': "87116616", 'name': "Isles Armentières Congis" },
    { 'id': "87381574", 'name': "Issou Porcheville" },
    { 'id': "87393074", 'name': "Issy" },
    { 'id': "87393306", 'name': "Issy Val de Seine" },
    { 'id': "87545301", 'name': "Ivry sur Seine" },
    { 'id': "87393066", 'name': "Javel" },
    { 'id': "87393512", 'name': "Jouy en Josas" },
    { 'id': "87545244", 'name': "Juvisy" },
    { 'id': "87381558", 'name': "Juziers" },
    { 'id': "87271171", 'name': "La Barre Ormesson" },
    { 'id': "87276287", 'name': "La Borne Blanche" },
    { 'id': "87382432", 'name': "La Celle Saint-Cloud" },
    { 'id': "87271304", 'name': "La Courneuve Aubervilliers" },
    { 'id': "87758011", 'name': "La Défense Grande Arche" },
    { 'id': "87681452", 'name': "La Ferté Alais" },
    { 'id': "87116673", 'name': "La Ferté Milon" },
    { 'id': "87116517", 'name': "La Ferté sous Jouarre" },
    { 'id': "87381871", 'name': "La Frette Montigny" },
    { 'id': "87386003", 'name': "La Garenne Colombes" },
    { 'id': "87116319", 'name': "Lagny Thorigny" },
    { 'id': "87682476", 'name': "La Grande Paroisse" },
    { 'id': "87545459", 'name': "La Norville Saint-Germain lès A." },
    { 'id': "87164798", 'name': "La Plaine Stade de France" },
    { 'id': "87545160", 'name': "Lardy" },
    { 'id': "87393256", 'name': "La Verrière" },
    { 'id': "87381202", 'name': "La Villetertre" },
    { 'id': "87271478", 'name': "Le Blanc Mesnil" },
    { 'id': "87271395", 'name': "Le Bourget" },
    { 'id': "87681395", 'name': "Le Bras de Fer Evry Génopole" },
    { 'id': "87113522", 'name': "Le Chénay Gagny" },
    { 'id': "87681635", 'name': "Le Coudray Montceau" },
    { 'id': "87682179", 'name': "Le Mée" },
    { 'id': "87393298", 'name': "Le Perray" },
    { 'id': "87271551", 'name': "Le Plessis Belleville" },
    { 'id': "87681627", 'name': "Le Plessis Chenet" },
    { 'id': "87113472", 'name': "Le Raincy Villemomble Montfermeil" },
    { 'id': "87492108", 'name': "Les Ardoines" },
    { 'id': "87113779", 'name': "Les Boullereaux Champigny" },
    { 'id': "87386664", 'name': "Les Clairières de Verneuil" },
    { 'id': "87393280", 'name': "Les Essarts le Roi" },
    { 'id': "87272146", 'name': "Les Grésillons" },
    { 'id': "87386680", 'name': "Les Mureaux" },
    { 'id': "87276238", 'name': "Les Noues" },
    { 'id': "87546226", 'name': "Les Saules" },
    { 'id': "87381095", 'name': "Le Stade" },
    { 'id': "87386300", 'name': "Les Vallées" },
    { 'id': "87113803", 'name': "Les Yvris Noisy le Grand" },
    { 'id': "87382473", 'name': "L'Etang la Ville" },
    { 'id': "87382366", 'name': "Le Val d'Or" },
    { 'id': "87681247", 'name': "Le Vert de Maisons" },
    { 'id': "87381210", 'name': "Liancourt Saint-Pierre" },
    { 'id': "87682153", 'name': "Lieusaint Moissy" },
    { 'id': "87381582", 'name': "Limay" },
    { 'id': "87276527", 'name': "L'Isle Adam Parmain" },
    { 'id': "87682401", 'name': "Livry sur Seine" },
    { 'id': "87116632", 'name': "Lizy sur Ourcq" },
    { 'id': "87393611", 'name': "Longjumeau" },
    { 'id': "87116137", 'name': "Longueville" },
    { 'id': "87382457", 'name': "Louveciennes" },
    { 'id': "87276253", 'name': "Louvres" },
    { 'id': "87276576", 'name': "Luzarches" },
    { 'id': "87281873", 'name': "Magenta" },
    { 'id': "87681155", 'name': "Maisons Alfort Alfortville" },
    { 'id': "87386425", 'name': "Maisons Laffitte" },
    { 'id': "87681486", 'name': "Maisse" },
    { 'id': "87684415", 'name': "Malesherbes" },
    { 'id': "87381509", 'name': "Mantes la Jolie" },
    { 'id': "87381590", 'name': "Mantes Station" },
    { 'id': "87393470", 'name': "Marchezais Broué" },
    { 'id': "87382812", 'name': "Mareil Marly" },
    { 'id': "87381715", 'name': "Mareil sur Mauldre" },
    { 'id': "87116665", 'name': "Mareuil sur Ourcq" },
    { 'id': "87116228", 'name': "Marles en Brie" },
    { 'id': "87382465", 'name': "Marly le Roi" },
    { 'id': "87545186", 'name': "Marolles en Hurepoix" },
    { 'id': "87393579", 'name': "Massy Palaiseau" },
    { 'id': "87383281", 'name': "Massy Verrières" },
    { 'id': "87381723", 'name': "Maule" },
    { 'id': "87381483", 'name': "Maurecourt" },
    { 'id': "87116103", 'name': "Meaux" },
    { 'id': "87682005", 'name': "Melun" },
    { 'id': "87381616", 'name': "Menerville" },
    { 'id': "87681411", 'name': "Mennecy" },
    { 'id': "87276675", 'name': "Mériel" },
    { 'id': "87276667", 'name': "Méry sur Oise" },
    { 'id': "87393108", 'name': "Meudon" },
    { 'id': "87393082", 'name': "Meudon Val Fleury" },
    { 'id': "87381830", 'name': "Meulan Hardricourt" },
    { 'id': "87271528", 'name': "Mitry Claye" },
    { 'id': "87545111", 'name': "Monnerville" },
    { 'id': "87684001", 'name': "Montargis" },
    { 'id': "87682302", 'name': "Montereau" },
    { 'id': "87393892", 'name': "Montfort l'Amaury Méré" },
    { 'id': "87682104", 'name': "Montgeron Crosne" },
    { 'id': "87381160", 'name': "Montgeroult Courcelles" },
    { 'id': "87276089", 'name': "Montigny Beauchamp" },
    { 'id': "87684100", 'name': "Montigny sur Loing" },
    { 'id': "87382879", 'name': "Montreuil" },
    { 'id': "87116400", 'name': "Montry Condé" },
    { 'id': "87276493", 'name': "Montsoult Maffliers" },
    { 'id': "87682278", 'name': "Moret Veneux les Sablons" },
    { 'id': "87116087", 'name': "Mormant" },
    { 'id': "87116244", 'name': "Mortcerf" },
    { 'id': "87681403", 'name': "Moulin Galant" },
    { 'id': "87116285", 'name': "Mouroux" },
    { 'id': "87547307", 'name': "Musée d'Orsay" },
    { 'id': "87116095", 'name': "Nangis" },
    { 'id': "87386318", 'name': "Nanterre Université" },
    { 'id': "87271577", 'name': "Nanteuil le Haudouin" },
    { 'id': "87116558", 'name': "Nanteuil Saâcy" },
    { 'id': "87684126", 'name': "Nemours Saint-Pierre" },
    { 'id': "87381020", 'name': "Neuilly Porte Maillot" },
    { 'id': "87334482", 'name': "Neuville Université" },
    { 'id': "87381731", 'name': "Nezel Aulnay" },
    { 'id': "87116566", 'name': "Nogent l'Artaud Charly" },
    { 'id': "87113746", 'name': "Nogent Le Perreux" },
    { 'id': "87276758", 'name': "Nointel Mours" },
    { 'id': "87393876", 'name': "Noisy le Roi" },
    { 'id': "87113217", 'name': "Noisy le Sec" },
    { 'id': "87681346", 'name': "Orangis Bois de l'Epine" },
    { 'id': "87393447", 'name': "Orgerus Béhoust" },
    { 'id': "87546200", 'name': "Orly Ville" },
    { 'id': "87271585", 'name': "Ormoy Villers" },
    { 'id': "87276279", 'name': "Orry la Ville Coye la Forêt" },
    { 'id': "87381145", 'name': "Osny" },
    { 'id': "87116020", 'name': "Ozoir la Ferrière" },
    { 'id': "87113209", 'name': "Pantin" },
    { 'id': "87271486", 'name': "Parc des Expositions" },
    { 'id': "87547026", 'name': "Paris Austerlitz" },
    { 'id': "87547000", 'name': "Paris Austerlitz" },
    { 'id': "87686667", 'name': "Paris Bercy" },
    { 'id': "87113001", 'name': "Paris Est" },
    { 'id': "87686006", 'name': "Paris Gare de Lyon" },
    { 'id': "87758581", 'name': "Paris Gare de Lyon" },
    { 'id': "87391003", 'name': "Paris Montparnasse" },
    { 'id': "87271007", 'name': "Paris Nord" },
    { 'id': "87271031", 'name': "Paris Nord" },
    { 'id': "87271023", 'name': "Paris Nord" },
    { 'id': "87384008", 'name': "Paris Saint-Lazare" },
    { 'id': "87391102", 'name': "Paris Vaugirard" },
    { 'id': "87381012", 'name': "Péreire Levallois" },
    { 'id': "87276469", 'name': "Persan Beaumont" },
    { 'id': "87393504", 'name': "Petit Jouy Les Loges" },
    { 'id': "87393652", 'name': "Petit Vaux" },
    { 'id': "87271163", 'name': "Pierrefitte Stains" },
    { 'id': "87276097", 'name': "Pierrelaye" },
    { 'id': "87393421", 'name': "Plaisir Grignon" },
    { 'id': "87393629", 'name': "Plaisir les Clayes" },
    { 'id': "87386573", 'name': "Poissy" },
    { 'id': "87381111", 'name': "Pont Cardinet" },
    { 'id': "87393041", 'name': "Pont de l'Alma" },
    { 'id': "87546192", 'name': "Pont de Rungis Aéroport d'Orly" },
    { 'id': "87393322", 'name': "Pont du Garigliano" },
    { 'id': "87682526", 'name': "Ponthierry Pringy" },
    { 'id': "87276139", 'name': "Pontoise" },
    { 'id': "87276154", 'name': "Pont Petit" },
    { 'id': "87393165", 'name': "Porchefontaine" },
    { 'id': "87111278", 'name': "Porte de Clichy" },
    { 'id': "87415679", 'name': "Port-Villez" },
    { 'id': "87276410", 'name': "Précy sur Oise" },
    { 'id': "87276501", 'name': "Presles Courcelles" },
    { 'id': "87116160", 'name': "Provins" },
    { 'id': "87382382", 'name': "Puteaux" },
    { 'id': "87393314", 'name': "Rambouillet" },
    { 'id': "87681338", 'name': "Ris Orangis" },
    { 'id': "87116038", 'name': "Roissy en Brie" },
    { 'id': "87654798", 'name': "Rosa Parks" },
    { 'id': "87113696", 'name': "Rosny Bois Perrier" },
    { 'id': "87113704", 'name': "Rosny sous Bois" },
    { 'id': "87415885", 'name': "Rosny sur Seine" },
    { 'id': "87546291", 'name': "Rungis La Fraternelle" },
    { 'id': "87545509", 'name': "Saint-Chéron" },
    { 'id': "87382358", 'name': "Saint-Cloud" },
    { 'id': "87393223", 'name': "Saint-Cyr" },
    { 'id': "87271015", 'name': "Saint-Denis" },
    { 'id': "87116178", 'name': "Sainte-Colombe Septveilles" },
    { 'id': "87545210", 'name': "Sainte-Geneviève des Bois" },
    { 'id': "87682542", 'name': "Saint-Fargeau" },
    { 'id': "87366922", 'name': "" },
    { 'id': "87382804", 'name': "Saint Germain en Laye GC" },
    { 'id': "87276170", 'name': "Saint-Gratien" },
    { 'id': "87276402", 'name': "Saint-Leu d'Esserent" },
    { 'id': "87276600", 'name': "Saint-Leu la Forêt" },
    { 'id': "87682294", 'name': "Saint-Mammès" },
    { 'id': "87545350", 'name': "Saint-Martin d'Etampes" },
    { 'id': "87547315", 'name': "Saint-Michel Notre Dame" },
    { 'id': "87545202", 'name': "Saint-Michel sur Orge" },
    { 'id': "87382481", 'name': "Saint-Nom la Bretèche F. de Marly" },
    { 'id': "87271247", 'name': "Saint-Ouen" },
    { 'id': "87276105", 'name': "Saint-Ouen l'Aumône" },
    { 'id': "87337980", 'name': "Saint-Ouen l'Aumône Liesse" },
    { 'id': "87381426", 'name': "" },
    { 'id': "87393843", 'name': "Saint-Quentin en Y. Montigny le B." },
    { 'id': "87276188", 'name': "Sannois" },
    { 'id': "87381186", 'name': "Santeuil le Perchay" },
    { 'id': "87276386", 'name': "Sarcelles Saint-Brice" },
    { 'id': "87386417", 'name': "Sartrouville" },
    { 'id': "87682187", 'name': "Savigny le Temple Nandy" },
    { 'id': "87545236", 'name': "Savigny sur Orge" },
    { 'id': "87545517", 'name': "Sermaise" },
    { 'id': "87272039", 'name': "Seugy" },
    { 'id': "87271445", 'name': "Sevran Beaudottes" },
    { 'id': "87271429", 'name': "Sevran Livry" },
    { 'id': "87393124", 'name': "Sèvres Rive gauche" },
    { 'id': "87382341", 'name': "Sèvres Ville d'Avray" },
    { 'id': "87684217", 'name': "Souppes Château Landon" },
    { 'id': "87164780", 'name': "Stade de France Saint-Denis" },
    { 'id': "87382374", 'name': "Suresnes Mont Valérien" },
    { 'id': "87276261", 'name': "Survilliers Fosses" },
    { 'id': "87393454", 'name': "Tacoignières Richebourg" },
    { 'id': "87276634", 'name': "Taverny" },
    { 'id': "87272054", 'name': "Thieux Nantouillet" },
    { 'id': "87682252", 'name': "Thomery" },
    { 'id': "87381822", 'name': "Thun le Paradis" },
    { 'id': "87116210", 'name': "Tournan" },
    { 'id': "87393231", 'name': "Trappes" },
    { 'id': "87381236", 'name': "Trie Château" },
    { 'id': "87381806", 'name': "Triel sur Seine" },
    { 'id': "87116491", 'name': "Trilport" },
    { 'id': "87381178", 'name': "Us" },
    { 'id': "87116293", 'name': "Vaires Torcy" },
    { 'id': "87381798", 'name': "Val d'Argenteuil" },
    { 'id': "87113712", 'name': "Val de Fontenay" },
    { 'id': "87276535", 'name': "Valmondois" },
    { 'id': "87391532", 'name': "Vanves Malakoff" },
    { 'id': "87393538", 'name': "Vauboyen" },
    { 'id': "87276626", 'name': "Vaucelles" },
    { 'id': "87382267", 'name': "Vaucresson" },
    { 'id': "87381814", 'name': "Vaux sur Seine" },
    { 'id': "87116079", 'name': "Verneuil l'Etang" },
    { 'id': "87386656", 'name': "Vernouillet Verneuil" },
    { 'id': "87682468", 'name': "Vernou sur Seine" },
    { 'id': "87393009", 'name': "Versailles Chantiers" },
    { 'id': "87393157", 'name': "Versailles Château Rive Gauche" },
    { 'id': "87382861", 'name': "Versailles Rive Droite" },
    { 'id': "87271437", 'name': "Vert Galant" },
    { 'id': "87276568", 'name': "Viarmes" },
    { 'id': "87681304", 'name': "Vigneux sur Seine" },
    { 'id': "87681619", 'name': "Villabé" },
    { 'id': "87272021", 'name': "Villaines" },
    { 'id': "87683102", 'name': "Villeneuve la Guyard" },
    { 'id': "87545277", 'name': "Villeneuve le Roi" },
    { 'id': "87681825", 'name': "Villeneuve Saint-Georges" },
    { 'id': "87681809", 'name': "Villeneuve Triage" },
    { 'id': "87386649", 'name': "Villennes sur Seine" },
    { 'id': "87271510", 'name': "Villeparisis Mitry le Neuf" },
    { 'id': "87271452", 'name': "Villepinte" },
    { 'id': "87393413", 'name': "Villepreux les Clayes" },
    { 'id': "87276220", 'name': "Villiers le Bel Gonesse Arnouville" },
    { 'id': "87116749", 'name': "Villiers Montbarbin" },
    { 'id': "87393884", 'name': "Villiers Neauphle Pontchartrain" },
    { 'id': "87113795", 'name': "Villiers sur Marne Le Plessis Trévise" },
    { 'id': "87382887", 'name': "Viroflay Rive Droite" },
    { 'id': "87393215", 'name': "Viroflay Rive Gauche" },
    { 'id': "87681312", 'name': "Viry Châtillon" },
    { 'id': "87545293", 'name': "Vitry sur Seine" },
    { 'id': "87682500", 'name': "Vosves" },
    { 'id': "87682443", 'name': "Vulaines sur Seine Samoreau" },
    { 'id': "87682112", 'name': "Yerres" }
];

function getStationByName(sName) {
    for (var i = 0; i < stations.length; i++) {
        if (stations[i].name.toLowerCase().indexOf(sName.toLowerCase()) > -1) {
            return stations[i].id;
        }
    }
    return sName;
}

function getStationById(iId) {
    for (var i = 0; i < stations.length; i++) {
        if (stations[i].id === iId) {
            return stations[i].name;
        }
    }
    return iId;
}

/*
Ablon 87545269
Achères Grand Cormier 87386052
Achères Ville 87381657
Aéroport Ch. de Gaulle 1 87271460
Aéroport Ch. de Gaulle 2 TGV 87001479
Andrésy 87381491
Angerville 87543090
Argenteuil 87381848
Arpajon 87545467
Asnières sur Seine 87381137
Athis Mons 87545251
Aubergenville Elisabethville 87386730
Aulnay sous Bois 87271411
Auvers sur Oise 87276543
Avenue du Pdt Kennedy 87543207
Avenue Foch 87381038
Avenue Henri Martin 87381046
Bagneaux sur Loing 87684191
Ballancourt 87681437
Bécon les Bruyères 87382002
Bellevue 87393116
Belloy Saint-Martin 87276550
Bessancourt 87276642
Beynes 87393363
Bibliothèque François Mitterrand 87328328
Bièvres 87393546
Boigneville 87684407
Bois Colombes 87381079
Bois le Roi 87682203
Boissise le Roi 87682518
Boissy l'aillerie 87381152
Bondy 87113407
Bonnières 87415893
Boran sur Oise 87276444
Bouffémont Moisselles 87276485
Bougival 87382440
Boulainvilliers 87543181
Bouray 87545178
Bourron Marlotte Grez 87684118
Boussy Saint-Antoine 87682138
Boutigny 87681478
Brétigny 87545194
Breuillet Bruyères le Châtel 87545483
Breuillet Village 87545491
Breval 87381624
Brunoy 87682120
Bruyères sur Oise 87276451
Buno Gironville 87681510
Cergy le Haut 87382655
Cergy Préfecture 87381905
Cergy Saint-Christophe 87382499
Cernay 87276063
Cesson 87682161
Chamarande 87545152
Champagne sur Oise 87276519
Champagne sur Seine 87682450
Champbenoist Poigny 87115873
Champ de Courses d'Enghien 87276030
Champ de Mars Tour Eiffel 87393058
Changis Saint-Jean 87116509
Chanteloup les Vignes 87381475
Chantilly Gouvieux 87276113
Chaponval 87276162
Chars 87381194
Chartrettes 87682419
Château Thierry 87116582
Châtelet les Halles 87758607
Chaumont en Vexin 87381228
Chaville Rive Droite 87382333
Chaville Rive Gauche 87393207
Chaville Vélizy 87393173
Chelles Gournay 87116111
Chemin d'Antony 87546317
Chézy sur Marne 87116574
Chilly Mazarin 87393637
Choisy le Roi 87545285
Clamart 87391565
Clichy Levallois 87381129
Coignières 87393272
Colombes 87381087
Combs la Ville Quincy 87682146
Compans 87272047
Conflans Fin d'Oise 87381459
Conflans Sainte-Honorine 87381897
Corbeil Essonnes 87681007
Cormeilles en Parisis 87381863
Couilly Saint-Germain 87116731
Coulommiers 87116301
Courbevoie 87382200
Crécy la Chapelle 87116772
Creil 87276006
Crépy en Valois 87271593
Créteil Pompadour 87608802
Crouy sur Ourcq 87116640
Dammartin Juilly Saint-Mard 87271536
Deuil Montmagny 87276345
Domont 87276436
Dordives 87684233
Dourdan 87545525
Dourdan la Forêt 87540179
Drancy 87271403
Dreux 87393488
Ecouen Ezanville 87276394
Egly 87545475
Emerainville Pontault Combault 87116046
Enghien les Bains 87276022
Epinay sur Orge 87545228
Epinay sur Seine 87271148
Epinay Villetaneuse 87271122
Epluches 87276147
Epône Mézières 87386763
Eragny Neuville 87381418
Ermont Eaubonne 87276055
Ermont Eaubonne 87534131
Ermont Halte 87276584
Esbly 87116327
Essonnes Robinson 87681601
Etampes 87545137
Etréchy 87545145
Evry Courcouronnes Centre 87681387
Evry Val de Seine 87681361
Faremoutiers Pommeuse 87116277
Ferrières Fontenay 87684241
Fontainebleau Avon 87682211
Fontaine le Port 87682427
Fontenay le Fleury 87393405
Franconville Le Plessis Bouchard 87276071
Frépillon 87276659
Gagny 87113514
Garancières La Queue 87393439
Garches Marnes la Coquette 87382259
Gargenville 87381566
Garges Sarcelles 87276196
Gazeran 87393348
Gennevilliers 87271205
Gisors 87381244
Goussainville 87276246
Grand Bourg 87681353
Gravigny Balizy 87393645
Gretz Armainvilliers 87116012
Grigny Centre 87681379
Groslay 87276360
Gros Noyer Saint-Prix 87276592
Guérard la Celle sur Morin 87116269
Guillerval 87545129
Haussmann Saint-Lazare 87281899
Herblay 87381889
Héricy 87682435
Houdan 87393462
Houilles Carrières sur Seine 87386409
Igny 87393561
Invalides 87393033
Isles Armentières Congis 87116616
Issou Porcheville 87381574
Issy 87393074
Issy Val de Seine 87393306
Ivry sur Seine 87545301
Javel 87393066
Jouy en Josas 87393512
Juvisy 87545244
Juziers 87381558
La Barre Ormesson 87271171
La Borne Blanche 87276287
La Celle Saint-Cloud 87382432
La Courneuve Aubervilliers 87271304
La Défense Grande Arche 87758011
La Ferté Alais 87681452
La Ferté Milon 87116673
La Ferté sous Jouarre 87116517
La Frette Montigny 87381871
La Garenne Colombes 87386003
Lagny Thorigny 87116319
La Grande Paroisse 87682476
La Norville Saint-Germain lès A. 87545459
La Plaine Stade de France 87164798
Lardy 87545160
La Verrière 87393256
La Villetertre 87381202
Le Blanc Mesnil 87271478
Le Bourget 87271395
Le Bras de Fer Evry Génopole 87681395
Le Chénay Gagny 87113522
Le Coudray Montceau 87681635
Le Mée 87682179
Le Perray 87393298
Le Plessis Belleville 87271551
Le Plessis Chenet 87681627
Le Raincy Villemomble Montfermeil 87113472
Les Ardoines 87492108
Les Boullereaux Champigny 87113779
Les Clairières de Verneuil 87386664
Les Essarts le Roi 87393280
Les Grésillons 87272146
Les Mureaux 87386680
Les Noues 87276238
Les Saules 87546226
Le Stade 87381095
Les Vallées 87386300
Les Yvris Noisy le Grand 87113803
L'Etang la Ville 87382473
Le Val d'Or 87382366
Le Vert de Maisons 87681247
Liancourt Saint-Pierre 87381210
Lieusaint Moissy 87682153
Limay 87381582
L'Isle Adam Parmain 87276527
Livry sur Seine 87682401
Lizy sur Ourcq 87116632
Longjumeau 87393611
Longueville 87116137
Louveciennes 87382457
Louvres 87276253
Luzarches 87276576
Magenta 87281873
Maisons Alfort Alfortville 87681155
Maisons Laffitte 87386425
Maisse 87681486
Malesherbes 87684415
Mantes la Jolie 87381509
Mantes Station 87381590
Marchezais Broué 87393470
Mareil Marly 87382812
Mareil sur Mauldre 87381715
Mareuil sur Ourcq 87116665
Marles en Brie 87116228
Marly le Roi 87382465
Marolles en Hurepoix 87545186
Massy Palaiseau 87393579
Massy Verrières 87383281
Maule 87381723
Maurecourt 87381483
Meaux 87116103
Melun 87682005
Menerville 87381616
Mennecy 87681411
Mériel 87276675
Méry sur Oise 87276667
Meudon 87393108
Meudon Val Fleury 87393082
Meulan Hardricourt 87381830
Mitry Claye 87271528
Monnerville 87545111
Montargis 87684001
Montereau 87682302
Montfort l'Amaury Méré 87393892
Montgeron Crosne 87682104
Montgeroult Courcelles 87381160
Montigny Beauchamp 87276089
Montigny sur Loing 87684100
Montreuil 87382879
Montry Condé 87116400
Montsoult Maffliers 87276493
Moret Veneux les Sablons 87682278
Mormant 87116087
Mortcerf 87116244
Moulin Galant 87681403
Mouroux 87116285
Musée d'Orsay 87547307
Nangis 87116095
Nanterre Université 87386318
Nanteuil le Haudouin 87271577
Nanteuil Saâcy 87116558
Nemours Saint-Pierre 87684126
Neuilly Porte Maillot 87381020
Neuville Université 87334482
Nezel Aulnay 87381731
Nogent l'Artaud Charly 87116566
Nogent Le Perreux 87113746
Nointel Mours 87276758
Noisy le Roi 87393876
Noisy le Sec 87113217
Orangis Bois de l'Epine 87681346
Orgerus Béhoust 87393447
Orly Ville 87546200
Ormoy Villers 87271585
Orry la Ville Coye la Forêt 87276279
Osny 87381145
Ozoir la Ferrière 87116020
Pantin 87113209
Parc des Expositions 87271486
Paris Austerlitz 87547026
Paris Austerlitz 87547000
Paris Bercy 87686667
Paris Est 87113001
Paris Gare de Lyon 87686006
Paris Gare de Lyon 87758581
Paris Montparnasse 87391003
Paris Nord 87271007
Paris Nord 87271031
Paris Nord 87271023
Paris Saint-Lazare 87384008
Paris Vaugirard 87391102
Péreire Levallois 87381012
Persan Beaumont 87276469
Petit Jouy Les Loges 87393504
Petit Vaux 87393652
Pierrefitte Stains 87271163
Pierrelaye 87276097
Plaisir Grignon 87393421
Plaisir les Clayes 87393629
Poissy 87386573
Pont Cardinet 87381111
Pont de l'Alma 87393041
Pont de Rungis Aéroport d'Orly 87546192
Pont du Garigliano 87393322
Ponthierry Pringy 87682526
Pontoise 87276139
Pont Petit 87276154
Porchefontaine 87393165
Porte de Clichy 87111278
Port-Villez 87415679
Précy sur Oise 87276410
Presles Courcelles 87276501
Provins 87116160
Puteaux 87382382
Rambouillet 87393314
Ris Orangis 87681338
Roissy en Brie 87116038
Rosa Parks 87654798
Rosny Bois Perrier 87113696
Rosny sous Bois 87113704
Rosny sur Seine 87415885
Rungis La Fraternelle 87546291
Saint-Chéron 87545509
Saint-Cloud 87382358
Saint-Cyr 87393223
Saint-Denis 87271015
Sainte-Colombe Septveilles 87116178
Sainte-Geneviève des Bois 87545210
Saint-Fargeau 87682542
Saint-Germain en Laye Bel Air
Fourqueux
87366922
Saint Germain en Laye GC 87382804
Saint-Gratien 87276170
Saint-Leu d'Esserent 87276402
Saint-Leu la Forêt 87276600
Saint-Mammès 87682294
Saint-Martin d'Etampes 87545350
Saint-Michel Notre Dame 87547315
Saint-Michel sur Orge 87545202
Saint-Nom la Bretèche F. de Marly 87382481
Saint-Ouen 87271247
Saint-Ouen l'Aumône 87276105
Saint-Ouen l'Aumône Liesse 87337980
Saint-Ouen l'Aumône Quartier de
l'Eglise
87381426
Saint-Quentin en Y. Montigny le B. 87393843
Sannois 87276188
Santeuil le Perchay 87381186
Sarcelles Saint-Brice 87276386
Sartrouville 87386417
Savigny le Temple Nandy 87682187
Savigny sur Orge 87545236
Sermaise 87545517
Seugy 87272039
Sevran Beaudottes 87271445
Sevran Livry 87271429
Sèvres Rive gauche 87393124
Sèvres Ville d'Avray 87382341
Souppes Château Landon 87684217
Stade de France Saint-Denis 87164780
Suresnes Mont Valérien 87382374
Survilliers Fosses 87276261
Tacoignières Richebourg 87393454
Taverny 87276634
Thieux Nantouillet 87272054
Thomery 87682252
Thun le Paradis 87381822
Tournan 87116210
Trappes 87393231
Trie Château 87381236
Triel sur Seine 87381806
Trilport 87116491
Us 87381178
Vaires Torcy 87116293
Val d'Argenteuil 87381798
Val de Fontenay 87113712
Valmondois 87276535
Vanves Malakoff 87391532
Vauboyen 87393538
Vaucelles 87276626
Vaucresson 87382267
Vaux sur Seine 87381814
Verneuil l'Etang 87116079
Vernouillet Verneuil 87386656
Vernou sur Seine 87682468
Versailles Chantiers 87393009
Versailles Château Rive Gauche 87393157
Versailles Rive Droite 87382861
Vert Galant 87271437
Viarmes 87276568
Vigneux sur Seine 87681304
Villabé 87681619
Villaines 87272021
Villeneuve la Guyard 87683102
Villeneuve le Roi 87545277
Villeneuve Saint-Georges 87681825
Villeneuve Triage 87681809
Villennes sur Seine 87386649
Villeparisis Mitry le Neuf 87271510
Villepinte 87271452
Villepreux les Clayes 87393413
Villiers le Bel Gonesse Arnouville 87276220
Villiers Montbarbin 87116749
Villiers Neauphle Pontchartrain 87393884
Villiers sur Marne Le Plessis Trévise 87113795
Viroflay Rive Droite 87382887
Viroflay Rive Gauche 87393215
Viry Châtillon 87681312
Vitry sur Seine 87545293
Vosves 87682500
Vulaines sur Seine Samoreau 87682443
Yerres 87682112
*/
