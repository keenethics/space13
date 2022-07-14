import { ScrollView, View, Text, Image, I18nManager } from 'react-native'
import Link from 'common/widgets/link'
import Icon from 'common/widgets/Icon'
import Recomentations from 'common/widgets/recomentations'
import styles from './empty.styles'

const source = {
  uri: 'emptybag',
}

export default function Empty() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.static}>
        <Text style={styles.title}>{gettext('Your bag is empty')}</Text>
        <Text style={styles.desc}>{gettext('Fill up your Bag by checking out all the awesome things you can buy on space13.com or by adding items from Your Favorites!')}</Text>
        <Image
          source={source}
          style={styles.image}
        />
        <Link to="Catalog" primary style={styles.button}>
          <Text style={styles.link}>{gettext('Continue shopping')}</Text>
          <Icon name={I18nManager.isRTL ? 'chevron-left-01' : 'chevron-right-01'} color="#ffffff" size={16} />
        </Link>
      </View>
      <View style={styles.recomendations}>
        <Recomentations title={gettext("Items you don't want to miss")} />
      </View>
    </ScrollView>
  )
}
