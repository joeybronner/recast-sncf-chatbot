'use strict';

var stations = [
    { 'id': '87381129', 'name': 'Clichy Levallois' },
    { 'id': '87384008', 'name': 'Paris Saint-Lazare' },
    { 'id': '87386318', 'name': 'Nanterre Université' },
    { 'id': '87758581', 'name': 'Paris Gare de Lyon' },
    { 'id': '87391003', 'name': 'Paris Montparnasse' },
    { 'id': '87271007', 'name': 'Paris Nord' },
    { 'id': '87381137', 'name': 'Asnières sur Seine' },
    { 'id': '87271304', 'name': 'La Courneuve Aubervilliers' },
    { 'id': '87758011', 'name': 'La Défense Grande Arche' }

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

/*Nom de la gare Code UIC
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
17 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
18 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
19 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
20 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
21 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
22 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
23 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
SNCF TRANSILIEN
DIRECTION DES SERVICES
POLE SI MARKETING ET SERVICES & MOBILITES DES AGENTS
24 API Information Voyageurs SNCF TRANSILIEN v0.2 Manuel utilisateur révision doc. : 0.2.3
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
