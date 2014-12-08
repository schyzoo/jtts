'{{~ it :date:day }}' + 
'<div class="b-afisha__date" id="date-{{= date.format(\'YYYY-MM-DD\') }}">' + 
'    {{~ day :index:entry }}' + 
'    <article class="b-event">' + 
'        {{? entry.pic }}<figure class="b-event__image"><img class="b-event__image__img" src="{{= entry.pic }}" alt=""></figure>{{?}}' + 
'        <h4 class="b-event__title">' + 
'            {{? entry.link }}' + 
'            <a href="{{= entry.link }}" title="{{= entry.name }}">{{= entry.name }}</a>' + 
'            {{??}}' + 
'            {{= entry.name }}' + 
'            {{?}}' + 
'        </h4>' + 
'        {{? entry.rating }}' + 
'        <span class="b-rating">' + 
'            {{~ [1,2,3,4,5] :i }}' + 
'            <span class="b-rating__star {{? i <= entry.rating }}b-rating__star_h{{??}}">&#75;</span>' + 
'            {{~}}' + 
'        </span>' + 
'        {{?}}' + 
'        {{? entry.announce }}<div class="b-event__text">{{= entry.announce }}</div>{{?}}' + 
'        {{? entry.start }}' + 
'        <div class="b-event__detauls">' + 
'            <span class="b-event__details__item b-event__details__place">' + 
'                {{? it.type === \'eventGroup\' && entry.place_name }}' + 
'                    {{? entry.place_id }}' + 
'                        <a href="/{{= it.city}}/place/{{= entry.place_id }}">{{= entry.place_name }}</a>' + 
'                    {{??}}' + 
'                        {{= entry.place_name }}' + 
'                    {{?}}' + 
'                {{??}}' + 
'                    {{= start.format(\'D MMMM\') }}' + 
'                    {{? entry.end && !entry.is_single }} &mdash; {{= new moment(entry.end).format(\'D MMMM\') }}{{?}}' + 
'                {{?}}' + 
'            </span>' + 
'            {{? entry.is_single }}<time class="b-event_details__item b-event__details__time">{{= start.format(\'H:mm\') }}</time>{{?}}' + 
'        </div>' + 
'        {{?}}' + 
'    </article>' + 
'    {{~}}' + 
'</div>' + 
'{{~}}';