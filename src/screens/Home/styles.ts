import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#150721',
        flex: 1,
        padding: 16,
        paddingTop: 56  
    },
    title: {
        fontSize: 24,
        color: '#f1f0f2',
        fontWeight: 'bold'
    },
    date: {
        fontSize: 16,
        color: '#f1f0f2',
        fontWeight: '100'
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 48,
        marginTop: 16
    },
    input: {
        backgroundColor: '#360f49',
        paddingHorizontal: 16,
        color: '#f1f0f2',
        fontSize: 16,
        flex: 1
    },
    addButton: {
        backgroundColor: '#2eac28',
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#f1f0f2',
    },
    listEmptyText: {
        color: '#f1f0f2',
        textAlign: "center"
    }
});